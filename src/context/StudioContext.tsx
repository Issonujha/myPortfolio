import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode, AccentColor, CustomerInquiry, OrderMilestone } from '../types';
import { MOCK_CUSTOMER_INQUIRIES, MOCK_ORDER_MILESTONES, STUDIO_SERVICES } from '../data/studioData';

interface ChatMessage {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  time: string;
  options?: string[];
  quote?: {
    serviceName: string;
    estimatedCost: number;
    estimatedDays: number;
    features: string[];
  };
}

interface StudioContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  accent: AccentColor;
  setAccent: (color: AccentColor) => void;
  
  // Live Chat
  isChatOpen: boolean;
  openChat: (initialServiceId?: string) => void;
  closeChat: () => void;
  chatMessages: ChatMessage[];
  sendMessage: (text: string) => void;
  selectChatOption: (option: string) => void;
  submitServiceQuoteToChat: (serviceId: string, featureIds: string[]) => void;

  // Backend Admin
  inquiries: CustomerInquiry[];
  orders: OrderMilestone[];
  addNewInquiry: (inquiry: Omit<CustomerInquiry, 'id' | 'createdAt'>) => void;
  updateOrderStatus: (orderId: string, status: OrderMilestone['status'], progress: number) => void;

  // Theme Customizer Modal
  isCustomizerOpen: boolean;
  setCustomizerOpen: (open: boolean) => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('studio_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('studio_accent');
    return (saved as AccentColor) || 'cyan';
  });

  const [isCustomizerOpen, setCustomizerOpen] = useState(false);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('studio_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('studio_accent', accent);
  }, [accent]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  const setAccent = (color: AccentColor) => {
    setAccentState(color);
  };

  // Live Customer Sales Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: "👋 Hi! Welcome to Sonu Jha Studio. Looking to build a web app, mobile app, AI agent system, or need branding & dashboards?",
      time: "Just now",
      options: ['Web Application', 'Mobile App & SDUI', 'AI Agent System', 'Excel & BI Dashboards', 'Logo & Branding']
    }
  ]);

  // Backend Admin Data
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() => {
    const saved = localStorage.getItem('studio_inquiries');
    return saved ? JSON.parse(saved) : MOCK_CUSTOMER_INQUIRIES;
  });

  const [orders, setOrders] = useState<OrderMilestone[]>(() => {
    const saved = localStorage.getItem('studio_orders');
    return saved ? JSON.parse(saved) : MOCK_ORDER_MILESTONES;
  });

  useEffect(() => {
    localStorage.setItem('studio_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('studio_orders', JSON.stringify(orders));
  }, [orders]);

  const openChat = (initialServiceId?: string) => {
    setIsChatOpen(true);
    if (initialServiceId) {
      const s = STUDIO_SERVICES.find(srv => srv.id === initialServiceId);
      if (s) {
        setChatMessages(prev => [
          ...prev,
          {
            id: `msg-${Date.now()}`,
            sender: 'agent',
            text: `Great choice! You're interested in ${s.name}. Our base turnaround is ${s.baseDeliveryDays} business days. Would you like an instant quote with custom features?`,
            time: 'Just now',
            options: ['Configure Features', 'Talk to Engineer', 'Request Proposal']
          }
        ]);
      }
    }
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const sendMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      time: 'Just now'
    };

    setChatMessages(prev => [...prev, userMsg]);

    // Automated smart agent response
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'agent',
        text: `Got it! I have logged your request: "${text}". An engineering lead (Sonu Jha) has been alerted. We guarantee an initial technical proposal and milestone plan within 4 business hours. Would you like to select features or share your timeline?`,
        time: 'Just now',
        options: ['View Services & Pricing', 'Book Direct Call', 'Submit Email']
      };
      setChatMessages(prev => [...prev, replyMsg]);
    }, 800);
  };

  const selectChatOption = (option: string) => {
    sendMessage(option);
  };

  const submitServiceQuoteToChat = (serviceId: string, featureIds: string[]) => {
    const s = STUDIO_SERVICES.find(srv => srv.id === serviceId);
    if (!s) return;

    const selected = s.features.filter(f => featureIds.includes(f.id));
    const totalDays = s.baseDeliveryDays + selected.reduce((acc, f) => acc + f.additionalDays, 0);
    const totalCost = s.basePrice + selected.reduce((acc, f) => acc + f.additionalPrice, 0);

    const quoteMsg: ChatMessage = {
      id: `quote-${Date.now()}`,
      sender: 'agent',
      text: `🚀 Here is your customized instant specification & quote for ${s.name}:`,
      time: 'Just now',
      quote: {
        serviceName: s.name,
        estimatedCost: totalCost,
        estimatedDays: totalDays,
        features: selected.map(f => f.name)
      },
      options: ['Confirm & Send Inquiry', 'Modify Features', 'Contact on WhatsApp']
    };

    setChatMessages(prev => [...prev, quoteMsg]);
    setIsChatOpen(true);

    // Also register this inquiry in the Backend Admin Panel!
    const newInquiry: CustomerInquiry = {
      id: `inq-${Date.now()}`,
      clientName: 'Direct Chat Prospect',
      clientEmail: 'pending-contact@client.io',
      serviceId: s.id,
      serviceName: s.name,
      selectedFeatures: selected.map(f => f.name),
      estimatedDays: totalDays,
      estimatedCost: totalCost,
      status: 'New Lead',
      targetDeadline: `In ${totalDays} Days`,
      createdAt: 'Just now',
      notes: 'Generated via Interactive Feature Timing Estimator in customer chat.'
    };

    setInquiries(prev => [newInquiry, ...prev]);
  };

  const addNewInquiry = (inquiry: Omit<CustomerInquiry, 'id' | 'createdAt'>) => {
    const item: CustomerInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      createdAt: 'Just now'
    };
    setInquiries(prev => [item, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: OrderMilestone['status'], progress: number) => {
    setOrders(prev => prev.map(ord => {
      if (ord.id === orderId) {
        return {
          ...ord,
          status,
          progressPercentage: progress
        };
      }
      return ord;
    }));
  };

  return (
    <StudioContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        accent,
        setAccent,
        isChatOpen,
        openChat,
        closeChat,
        chatMessages,
        sendMessage,
        selectChatOption,
        submitServiceQuoteToChat,
        inquiries,
        orders,
        addNewInquiry,
        updateOrderStatus,
        isCustomizerOpen,
        setCustomizerOpen
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
