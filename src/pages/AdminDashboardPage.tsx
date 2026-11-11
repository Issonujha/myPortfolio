import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { Clock, DollarSign, Users, Plus, MessageSquare, ShieldCheck } from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { inquiries, orders, updateOrderStatus, openChat, addNewInquiry } = useStudio();
  const [activeTab, setActiveTab] = useState<'inquiries' | 'orders'>('inquiries');
  const [showNewLeadModal, setShowNewLeadModal] = useState(false);

  // New lead form state
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newService, setNewService] = useState('Web Applications & Enterprise Portals');
  const [newBudget, setNewBudget] = useState('3500');
  const [newDays, setNewDays] = useState('7');

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newClientEmail) return;

    addNewInquiry({
      clientName: newClientName,
      clientEmail: newClientEmail,
      serviceId: 'web-dev',
      serviceName: newService,
      selectedFeatures: ['Core Architecture', 'Security RBAC', 'API Integration'],
      estimatedDays: parseInt(newDays) || 7,
      estimatedCost: parseInt(newBudget) || 3000,
      status: 'New Lead',
      targetDeadline: `In ${newDays} Days`,
      notes: 'Manually logged in Admin Management Console.'
    });

    setNewClientName('');
    setNewClientEmail('');
    setShowNewLeadModal(false);
  };

  const totalPipeline = inquiries.reduce((acc, inq) => acc + inq.estimatedCost, 0);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>BACKEND STUDIO CONTROL TOWER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-zinc-900 tracking-tight">
            Client Inquiries &amp; SLA Management
          </h1>
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
            Real-time pipeline tracking, inbound chat prospects, and sprint delivery velocity.
          </p>
        </div>

        <button
          onClick={() => setShowNewLeadModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs transition-colors shadow-md shadow-cyan-500/20 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log Client Lead</span>
        </button>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Inbound Leads", value: inquiries.length.toString(), icon: Users, highlight: "cyan" },
          { label: "Pipeline Value", value: `$${totalPipeline.toLocaleString()}`, icon: DollarSign, highlight: "emerald" },
          { label: "SLA On-Time Rate", value: "99.4%", icon: ShieldCheck, highlight: "violet" },
          { label: "Sprint Orders Active", value: orders.filter(o => o.status !== 'Delivered').length.toString(), icon: Clock, highlight: "amber" },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white shadow-lg space-y-2"
          >
            <div className="flex items-center justify-between text-zinc-500">
              <span className="text-xs font-mono font-semibold uppercase">{kpi.label}</span>
              <kpi.icon className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white dark:text-white light:text-zinc-900 tracking-tight">
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {/* Section Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-white/[0.08] pb-1">
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
            activeTab === 'inquiries'
              ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Inbound Leads &amp; Customer Chats ({inquiries.length})
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
            activeTab === 'orders'
              ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/10'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Active Project Orders &amp; SLA Timers ({orders.length})
        </button>
      </div>

      {/* TAB 1: Inbound Leads & Customer Chats Table */}
      {activeTab === 'inquiries' && (
        <div className="rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white overflow-hidden shadow-2xl">
          <div className="p-4 px-6 border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-white dark:text-white light:text-zinc-900">
              Customer Chat Inquiries &amp; Quotations
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              Synced with Live Customer Chat Widget
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 text-zinc-400 uppercase text-[11px] border-b border-white/[0.06]">
                <tr>
                  <th className="py-3.5 px-6 font-semibold">Client / Company</th>
                  <th className="py-3.5 px-6 font-semibold">Service Domain</th>
                  <th className="py-3.5 px-6 font-semibold hidden md:table-cell">Configured Features</th>
                  <th className="py-3.5 px-6 font-semibold">Budget</th>
                  <th className="py-3.5 px-6 font-semibold">SLA Timeline</th>
                  <th className="py-3.5 px-6 font-semibold">Status</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white dark:text-white light:text-zinc-900">
                      <div>{inq.clientName}</div>
                      <div className="text-[11px] text-zinc-500 font-normal">{inq.clientEmail}</div>
                    </td>
                    <td className="py-4 px-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
                      {inq.serviceName}
                    </td>
                    <td className="py-4 px-6 text-zinc-400 text-[11px] hidden md:table-cell max-w-xs">
                      {inq.selectedFeatures.slice(0, 2).join(', ')}
                      {inq.selectedFeatures.length > 2 && ` +${inq.selectedFeatures.length - 2} more`}
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-400">
                      ${inq.estimatedCost.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-cyan-400">
                      {inq.estimatedDays} Days SLA
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        inq.status === 'Contract Signed'
                          ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                          : inq.status === 'Proposal Sent'
                          ? 'bg-cyan-950 text-cyan-400 border-cyan-800'
                          : 'bg-amber-950 text-amber-400 border-amber-800'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => openChat(inq.serviceId)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-cyan-400 hover:text-white text-[11px] transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Open Chat</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Active Project Orders & SLA Milestone Board */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orders.map((ord) => (
              <div
                key={ord.id}
                className="p-6 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {ord.orderNumber}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                    ord.status === 'Delivered'
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                      : ord.status === 'In Review'
                      ? 'bg-indigo-950 text-indigo-400 border-indigo-800'
                      : 'bg-amber-950 text-amber-400 border-amber-800'
                  }`}>
                    {ord.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
                    {ord.projectTitle}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400">
                    Client: {ord.clientName} &bull; Lead: {ord.assignedLead}
                  </div>
                </div>

                {/* SLA Timer */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Target Delivery: {ord.deadlineDate}</span>
                  </span>
                  <span className="font-bold text-emerald-400">
                    {ord.slaRemainingHours > 0 ? `${ord.slaRemainingHours}h remaining` : 'Delivered on Schedule'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">Stage: {ord.stage}</span>
                    <span className="font-bold text-white dark:text-white light:text-zinc-900">{ord.progressPercentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                      style={{ width: `${ord.progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono">
                  <span className="text-zinc-500">Fast-track sprint</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateOrderStatus(ord.id, 'In Progress', 60)}
                      className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px]"
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => updateOrderStatus(ord.id, 'In Review', 90)}
                      className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-cyan-400 text-[11px]"
                    >
                      In Review
                    </button>
                    <button
                      onClick={() => updateOrderStatus(ord.id, 'Delivered', 100)}
                      className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 hover:bg-emerald-900 text-[11px]"
                    >
                      Delivered
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Log Lead Modal */}
      {showNewLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <form
            onSubmit={handleCreateLead}
            className="w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/[0.1] bg-zinc-950 text-white shadow-2xl space-y-4"
          >
            <h3 className="text-xl font-bold tracking-tight">Log New Customer Inquiry</h3>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-zinc-400 block mb-1">Client / Company Name</label>
                <input
                  type="text"
                  required
                  value={newClientName}
                  onChange={e => setNewClientName(e.target.value)}
                  placeholder="e.g. Rahul Verma (TechCorp)"
                  className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="text-zinc-400 block mb-1">Client Email</label>
                <input
                  type="email"
                  required
                  value={newClientEmail}
                  onChange={e => setNewClientEmail(e.target.value)}
                  placeholder="e.g. rahul@techcorp.io"
                  className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="text-zinc-400 block mb-1">Service Domain</label>
                <select
                  value={newService}
                  onChange={e => setNewService(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option>Web Applications &amp; Enterprise Portals</option>
                  <option>Mobile Apps &amp; Server-Driven UI</option>
                  <option>AI &amp; Autonomous Agent Systems</option>
                  <option>Excel Dashboards &amp; Business Intelligence</option>
                  <option>Logo Design &amp; Brand Identity</option>
                  <option>Marketing Banners &amp; Visual Media</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 block mb-1">Budget ($)</label>
                  <input
                    type="number"
                    value={newBudget}
                    onChange={e => setNewBudget(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 block mb-1">Delivery SLA (Days)</label>
                  <input
                    type="number"
                    value={newDays}
                    onChange={e => setNewDays(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setShowNewLeadModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs"
              >
                Save Inquiry
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
