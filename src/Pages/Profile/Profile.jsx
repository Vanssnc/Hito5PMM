import React from 'react';

export default function Profile() {
  const userEmail = 'usuario@ejemplo.com';

  return (
    <div className='User'>
      <h2>Perfil del Usuario</h2>
      <p>Email: {userEmail}</p>
      <button onClick={() => alert('Cerrar sesión')}>
        Cerrar sesión
      </button>
    </div>
  );
}