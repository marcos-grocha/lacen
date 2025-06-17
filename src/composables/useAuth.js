import { ref } from 'vue';

const users = [
  { id: 1, email: 'marcos@lacen.com', password: '123' },
  { id: 2, email: 'user@lacen.com', password: 'user123', }
];

const errorMessage = ref('');

export function useAuth() {
  async function login(email, password) {
    errorMessage.value = '';
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      errorMessage.value = 'E-mail ou senha inválidos!';
      return null;
    }

    return {
      id: user.id,
      email: user.email
    };
  }

  return {
    login,
    errorMessage
  };
}