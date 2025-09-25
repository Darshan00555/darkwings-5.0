"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FolderOpen,
  CreditCard,
  MessageCircle,
  Settings,
  User,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Activity,
  BarChart3,
  Zap,
  Bell,
  Search,
  Filter,
  Eye,
  Target,
  Rocket,
  Shield,
} from "lucide-react"
import ProtectedRoute from "@/components/protected-route"
import { useAuth } from "@/components/auth-provider"
import PageTransition from "@/components/page-transition"
import AnimatedButton from "@/components/animated-button"
import Navbar from "@/components/navbar"

type DashboardTab = "overview" | "projects" | "billing" | "support" | "profile"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [notifications, setNotifications] = useState(3)
  const { user } = useAuth()

  const sidebarItems = [
    { id: "overview" as DashboardTab, label: "Overview", icon: BarChart3, description: "Dashboard home" },
    { id: "projects" as DashboardTab, label: "My Projects", icon: FolderOpen, description: "Active projects" },
    { id: "billing" as DashboardTab, label: "Billing & Invoices", icon: CreditCard, description: "Financial overview" },
    { id: "support" as DashboardTab, label: "Support Tickets", icon: MessageCircle, description: "Get help" },
    { id: "profile" as DashboardTab, label: "Profile Settings", icon: Settings, description: "Account settings" },
  ]

  const mockProjects = [
    {
      id: 1,
      name: "Project Alpha",
      status: "In Progress",
      progress: 65,
      startDate: "2024-01-15",
      description: "E-commerce website with custom dashboard",
    },
    {
      id: 2,
      name: "Project Beta",
      status: "Completed",
      progress: 100,
      startDate: "2023-12-01",
      description: "Corporate landing page with animations",
    },
  ]

  const mockInvoices = [
    { id: "INV-001", date: "2024-01-15", amount: "$2,500", status: "Paid" },
    { id: "INV-002", date: "2024-02-01", amount: "$1,800", status: "Due" },
    { id: "INV-003", date: "2023-12-15", amount: "$3,200", status: "Paid" },
  ]

  const mockTickets = [
    {
      id: "TKT-001",
      subject: "Login issue on mobile",
      status: "Open",
      priority: "High",
      created: "2024-01-20",
    },
    {
      id: "TKT-002",
      subject: "Feature request for dashboard",
      status: "In Progress",
      priority: "Medium",
      created: "2024-01-18",
    },
    {
      id: "TKT-003",
      subject: "Performance optimization",
      status: "Resolved",
      priority: "Low",
      created: "2024-01-10",
    },
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-electric-blue via-neon-magenta to-electric-blue bg-clip-text text-transparent mb-2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Welcome back, {user?.username}!
          </motion.h2>
          <p className="text-gray-300 text-lg">Here's what's happening with your projects</p>
          <motion.div
            className="flex items-center gap-4 mt-3 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="p-3 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-xl hover:border-electric-blue/50 transition-all duration-300">
              <Bell size={20} className="text-electric-blue" />
              {notifications > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 w-5 h-5 bg-neon-magenta rounded-full text-xs text-white flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {notifications}
                </motion.span>
              )}
            </button>
          </motion.div>

          <AnimatedButton variant="primary" className="enhanced-glow">
            <Zap className="w-4 h-4 mr-2" />
            New Project
          </AnimatedButton>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects, invoices, tickets..."
            className="w-full pl-10 pr-4 py-3 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-xl text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/50 transition-all duration-300"
          />
        </div>
        <button className="p-3 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-xl hover:border-electric-blue/50 transition-all duration-300">
          <Filter size={20} className="text-electric-blue" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: FolderOpen,
            value: "12",
            label: "Active Projects",
            trend: "+2 this week",
            color: "electric-blue",
            bgGradient: "from-electric-blue/20 to-electric-blue/5",
          },
          {
            icon: CheckCircle,
            value: "8",
            label: "Completed",
            trend: "+3 this month",
            color: "green-400",
            bgGradient: "from-green-400/20 to-green-400/5",
          },
          {
            icon: Clock,
            value: "3",
            label: "Pending Review",
            trend: "-1 from last week",
            color: "yellow-400",
            bgGradient: "from-yellow-400/20 to-yellow-400/5",
          },
          {
            icon: DollarSign,
            value: "$24.5K",
            label: "Total Revenue",
            trend: "+12% this quarter",
            color: "neon-magenta",
            bgGradient: "from-neon-magenta/20 to-neon-magenta/5",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            onHoverStart={() => setHoveredCard(stat.label)}
            onHoverEnd={() => setHoveredCard(null)}
            className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6 cursor-pointer group overflow-hidden`}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              animate={{
                scale: hoveredCard === stat.label ? 1.02 : 1,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className={`p-3 bg-${stat.color}/20 rounded-xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </motion.div>
                <motion.div
                  animate={{
                    y: hoveredCard === stat.label ? -2 : 0,
                    scale: hoveredCard === stat.label ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TrendingUp className={`w-5 h-5 text-${stat.color}`} />
                </motion.div>
              </div>

              <motion.h3
                className="text-3xl font-bold text-white mb-1"
                animate={{
                  scale: hoveredCard === stat.label ? 1.05 : 1,
                }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300 text-sm font-medium mb-2">{stat.label}</p>
              <p className={`text-xs text-${stat.color} font-medium`}>{stat.trend}</p>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${stat.color === "electric-blue" ? "rgba(0, 255, 255, 0.1)" : "rgba(255, 0, 255, 0.1)"} 0%, transparent 100%)`,
              }}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/20 via-neon-magenta/20 to-electric-blue/20 blur-sm opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Activity className="w-6 h-6 text-electric-blue" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
              </div>
              <button className="text-electric-blue hover:text-neon-magenta transition-colors text-sm">View All</button>
            </div>

            <div className="space-y-4">
              {[
                {
                  action: "Project Alpha milestone completed",
                  time: "2 hours ago",
                  type: "success",
                  icon: CheckCircle,
                },
                {
                  action: "New invoice generated for Project Beta",
                  time: "5 hours ago",
                  type: "info",
                  icon: CreditCard,
                },
                { action: "Support ticket TKT-001 updated", time: "1 day ago", type: "warning", icon: AlertCircle },
                { action: "Payment received for INV-001", time: "2 days ago", type: "success", icon: DollarSign },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-dark-bg/30 rounded-xl hover:bg-dark-bg/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className={`p-2 rounded-lg ${
                      activity.type === "success"
                        ? "bg-green-400/20 text-green-400"
                        : activity.type === "warning"
                          ? "bg-yellow-400/20 text-yellow-400"
                          : "bg-electric-blue/20 text-electric-blue"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <activity.icon size={16} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium group-hover:text-electric-blue transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                  <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity" whileHover={{ x: 5 }}>
                    <Eye size={16} className="text-gray-400" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-2 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Rocket className="text-electric-blue" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FolderOpen, label: "New Project", color: "electric-blue" },
              { icon: MessageCircle, label: "Support Ticket", color: "neon-magenta" },
              { icon: CreditCard, label: "View Invoices", color: "green-400" },
              { icon: Settings, label: "Settings", color: "yellow-400" },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                className="h-20 flex flex-col items-center justify-center gap-2 bg-dark-bg/30 hover:bg-dark-bg/50 border border-electric-blue/10 hover:border-electric-blue/30 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <action.icon className={`w-5 h-5 text-${action.color} group-hover:text-white transition-colors`} />
                </motion.div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-2 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Target className="text-electric-blue" />
            Performance Metrics
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Success Rate", value: "98.5%", color: "green-400" },
              { label: "Avg Response", value: "2.3h", color: "electric-blue" },
              { label: "Client Satisfaction", value: "4.9/5", color: "neon-magenta" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <motion.div
                  className={`text-2xl font-bold text-${metric.color} mb-1`}
                  animate={{
                    textShadow: [
                      `0 0 10px rgba(${metric.color === "green-400" ? "34, 197, 94" : metric.color === "electric-blue" ? "0, 255, 255" : "255, 0, 255"}, 0.5)`,
                      `0 0 20px rgba(${metric.color === "green-400" ? "34, 197, 94" : metric.color === "electric-blue" ? "0, 255, 255" : "255, 0, 255"}, 0.8)`,
                      `0 0 10px rgba(${metric.color === "green-400" ? "34, 197, 94" : metric.color === "electric-blue" ? "0, 255, 255" : "255, 0, 255"}, 0.5)`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {metric.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="lg:col-span-2 bg-dark-surface/40 backdrop-blur-xl border border-electric-blue/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Shield className="text-green-400" />
            Security Status
          </h3>
          <div className="space-y-4">
            {[
              { item: "SSL Certificate", status: "Active", color: "green-400" },
              { item: "Two-Factor Auth", status: "Enabled", color: "green-400" },
              { item: "Last Security Scan", status: "24h ago", color: "electric-blue" },
              { item: "Backup Status", status: "Up to date", color: "green-400" },
            ].map((security, index) => (
              <motion.div
                key={security.item}
                className="flex items-center justify-between p-3 bg-dark-bg/30 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <span className="text-gray-300">{security.item}</span>
                <span className={`text-${security.color} font-medium flex items-center gap-2`}>
                  <div className={`w-2 h-2 bg-${security.color} rounded-full animate-pulse`} />
                  {security.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">My Projects</h2>
        <AnimatedButton variant="secondary">Request New Project</AnimatedButton>
      </div>

      <div className="grid gap-6">
        {mockProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6 tilt-card"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-primary/20 text-primary"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Progress</span>
                <span className="text-sm text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300 enhanced-glow"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                Started: {project.startDate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderBilling = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Billing & Invoices</h2>
        <AnimatedButton variant="secondary">Download All</AnimatedButton>
      </div>

      <div className="glass-effect rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Invoice ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {mockInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-primary/5">
                  <td className="px-6 py-4 text-white font-medium">{invoice.id}</td>
                  <td className="px-6 py-4 text-gray-400">{invoice.date}</td>
                  <td className="px-6 py-4 text-white font-semibold">{invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        invoice.status === "Paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-secondary transition-colors">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
        <AnimatedButton variant="secondary">Create New Ticket</AnimatedButton>
      </div>

      <div className="grid gap-4">
        {mockTickets.map((ticket) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6 tilt-card"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{ticket.subject}</h3>
                <p className="text-sm text-gray-400">Ticket ID: {ticket.id}</p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    ticket.priority === "High"
                      ? "bg-red-500/20 text-red-400"
                      : ticket.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {ticket.priority}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    ticket.status === "Resolved"
                      ? "bg-green-500/20 text-green-400"
                      : ticket.status === "In Progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={16} />
              Created: {ticket.created}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Profile Settings</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                type="text"
                defaultValue={user?.username}
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <AnimatedButton>Update Profile</AnimatedButton>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Profile Picture</h3>
          <div className="text-center">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/30 flex items-center justify-center enhanced-glow"
              style={{
                background: user?.avatar || "linear-gradient(135deg, #30C6A8, #3A50F0)",
              }}
            >
              <User size={32} className="text-white" />
            </div>
            <AnimatedButton variant="secondary">Upload New Picture</AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview()
      case "projects":
        return renderProjects()
      case "billing":
        return renderBilling()
      case "support":
        return renderSupport()
      case "profile":
        return renderProfile()
      default:
        return renderOverview()
    }
  }

  return (
    <ProtectedRoute>
      <PageTransition>
        <div className="min-h-screen bg-dark-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-dark-bg to-neon-magenta/5" />

          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-electric-blue/20 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                }}
                animate={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                }}
                transition={{
                  duration: Math.random() * 20 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/30 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            />
          </div>

          <Navbar />
          <div className="flex pt-20 relative z-10">
            <motion.div
              className="w-72 bg-dark-surface/40 backdrop-blur-xl border-r border-electric-blue/20 min-h-screen"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <motion.h1
                  className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-magenta bg-clip-text text-transparent mb-8"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Dashboard
                </motion.h1>

                <nav className="space-y-2">
                  {sidebarItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group ${
                          activeTab === item.id
                            ? "bg-gradient-to-r from-electric-blue/20 to-neon-magenta/20 text-white border border-electric-blue/30"
                            : "text-gray-400 hover:text-white hover:bg-electric-blue/10 border border-transparent"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          whileHover={{ rotate: activeTab === item.id ? 0 : 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={20} />
                        </motion.div>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            {item.description}
                          </div>
                        </div>
                        {activeTab === item.id && (
                          <motion.div
                            className="w-2 h-2 bg-electric-blue rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        )}
                      </motion.button>
                    )
                  })}
                </nav>
              </div>
            </motion.div>

            <div className="flex-1 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </PageTransition>
    </ProtectedRoute>
  )
}
