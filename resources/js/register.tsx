import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useNavigate } from 'react-router-dom';
import { X } from "@phosphor-icons/react";
import { AuthContext } from './auth-context';

export function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowPasswordError(true);
      return;
    }
    setShowPasswordError(false);
    try {
      await authContext.register({ name, email, password });
      console.log('User created successfully');
      navigate('/home');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[75vh] bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Criar a sua conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {showPasswordError && (
            <div className='inline-flex items-center text-sm bg-red-200 border border-red-600 text-red-600 h-9 rounded-md px-3 justify-start gap-1 font-bold transition-opacity duration-300'>
              <X size={20} weight="bold" />
              As Senhas não coincidem
            </div>
          )}
          <form onSubmit={handleSubmit} className='grid gap-4'>
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label className={`transition-colors duration-300 ${showPasswordError ? 'text-red-600' : ''}`} htmlFor="password">Senha</Label>
              <Input className={`transition-colors duration-300 ${showPasswordError ? 'border-red-600' : ''}`} id="password" type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label className={`transition-colors duration-300 ${showPasswordError ? 'text-red-600' : ''}`} htmlFor="confirm-password">Confirme sua senha</Label>
              <Input className={`transition-colors duration-300 ${showPasswordError ? 'border-red-600' : ''}`} id="confirm-password" type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="termos" required />
              <Label htmlFor="termos" className="text-sm">
                Estou de acordo com os{" "}
                <Link to="/termos-de-servico" className="underline">
                  termos de serviço
                </Link>
              </Label>
            </div>
            <Button type="submit" className="w-full mt-4">Create Account</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
