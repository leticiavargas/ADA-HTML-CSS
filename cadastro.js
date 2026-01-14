const form = document.getElementById('curriculoForm');

form.addEventListener('submit', async(event) => {
  event.preventDefault();

  const formData = new FormData(form);
  //console.log(formData)
  const dados = Object.fromEntries(formData);
  //console.log(dados);

  const resposta =  fetch('https://69681c73bbe157c088b3ba74.mockapi.io/api/info', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
  });

  if (resposta.ok) {
    alert('Formulário enviado com sucesso!');
    form.reset();
  } else {
      alert('Erro ao enviar formulário');
  }



});