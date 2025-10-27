// Mock authentication utilities using localStorage

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: User;
  token?: string;
}

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get all users from localStorage
const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Generate a simple token
const generateToken = (userId: string): string => {
  return btoa(`${userId}:${Date.now()}`);
};

// Sign up a new user
export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  await delay(800); // Simulate network delay

  const users = getUsers();

  // Check if user already exists
  if (users.some(u => u.email === email)) {
    return {
      success: false,
      message: 'An account with this email already exists',
    };
  }

  if (users.some(u => u.username === username)) {
    return {
      success: false,
      message: 'This username is already taken',
    };
  }

  // Create new user
  const newUser: User = {
    id: crypto.randomUUID(),
    username,
    email,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  // Store password separately (in real app, this would be hashed server-side)
  const passwords = JSON.parse(localStorage.getItem('passwords') || '{}');
  passwords[newUser.id] = password;
  localStorage.setItem('passwords', JSON.stringify(passwords));

  const token = generateToken(newUser.id);
  localStorage.setItem('authToken', token);
  localStorage.setItem('currentUser', JSON.stringify(newUser));

  return {
    success: true,
    user: newUser,
    token,
    message: 'Account created successfully',
  };
};

// Sign in existing user
export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  await delay(800); // Simulate network delay

  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return {
      success: false,
      message: 'Invalid email or password',
    };
  }

  // Check password
  const passwords = JSON.parse(localStorage.getItem('passwords') || '{}');
  if (passwords[user.id] !== password) {
    return {
      success: false,
      message: 'Invalid email or password',
    };
  }

  const token = generateToken(user.id);
  localStorage.setItem('authToken', token);
  localStorage.setItem('currentUser', JSON.stringify(user));

  return {
    success: true,
    user,
    token,
    message: 'Logged in successfully',
  };
};

// Sign out
export const signOut = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('currentUser');
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};
