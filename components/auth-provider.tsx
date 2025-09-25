"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  username: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("darkwings_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful login
    const mockUser: User = {
      id: "1",
      username: email.split("@")[0],
      email,
      avatar: `linear-gradient(135deg, #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`,
    }

    setUser(mockUser)
    localStorage.setItem("darkwings_user", JSON.stringify(mockUser))
    return true
  }

  const signup = async (email: string, username: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful signup
    const mockUser: User = {
      id: Date.now().toString(),
      username,
      email,
      avatar: `linear-gradient(135deg, #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`,
    }

    setUser(mockUser)
    localStorage.setItem("darkwings_user", JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("darkwings_user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
