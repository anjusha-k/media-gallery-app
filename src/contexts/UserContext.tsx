"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface UserData {
  username: string;
  jobTitle: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const USER_DATA_KEY = "media_gallery_user_data";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserDataState] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const savedData = localStorage.getItem(USER_DATA_KEY);
        if (savedData) {
          const parsedData = JSON.parse(savedData) as UserData;
          if (parsedData.username && parsedData.jobTitle) {
            setUserDataState(parsedData);
          }
        }
      } catch (error) {
        console.error("Error loading user data from localStorage:", error);
        localStorage.removeItem(USER_DATA_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  /**
   * Save user data to state and localStorage
   */
  const setUserData = (data: UserData) => {
    try {
      setUserDataState(data);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving user data to localStorage:", error);
    }
  };

  /**
   * Clear user data from state and localStorage
   */
  const clearUserData = () => {
    try {
      setUserDataState(null);
      localStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
      console.error("Error clearing user data from localStorage:", error);
    }
  };

  const value: UserContextType = {
    userData,
    setUserData,
    clearUserData,
    isAuthenticated: userData !== null,
  };

  // Don't render children until we've loaded user data
  if (isLoading) {
    return null;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/**
 * Custom hook to use user context
 * Throws error if used outside of UserProvider
 */
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
