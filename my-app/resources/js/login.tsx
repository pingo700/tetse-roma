import React, { useState, useContext } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './auth-context';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await authContext.login({ email, password });
      console.log('Token:', token); // Log the token
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setLoginMessage(payload.message || 'Login successful');
        console.log(payload.message || 'Login successful');
      }
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginMessage('Error logging in');
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center h-[65vh]">
      <div className="light">
        <Card className="mx-auto max-w-sm border-none shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Digite seu nome de usuário e senha para acessar sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  type="email"
                  placeholder="Insira seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="ml-auto text-sm underline">Esqueceu sua senha?</Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Insira sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
              {loginMessage && (
                <div className="mt-4 text-center text-sm text-red-500">
                  {loginMessage}
                </div>
              )}
              <div className="mt-4 text-center text-sm">
                Não possui uma conta? <Link to="/register" className="underline">Crie uma conta</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
