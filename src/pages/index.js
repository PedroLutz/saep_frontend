import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function Home({autenticacao}) {
  const router = useRouter();
  const {isAutenticado} = autenticacao;
  
  useEffect(() => {
    isAutenticado ? router.push('/login') : router.push('/tabela')
  })
  
  return (
    <>
      
    </>
  );
}
