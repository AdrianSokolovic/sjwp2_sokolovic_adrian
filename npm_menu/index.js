import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Odaberi opciju',
    choices: [
      { name: 'Hrv', value: 'Hrvatski jezik' },
      { name: 'Str', value: 'Strani jezik' },
      { name: 'Mat', value: 'Matematika' },
      { name: 'Pro', value: 'Programiranje' }
    ]
  });

  if (pitanje === 'Hrvatski jezik') {
    console.log('Odabrao si Hrvatski jezik');
  } 
  else if (pitanje === 'Strani jezik') {
    console.log('Odabrao si Strani jezik');
  }
  else if (pitanje === 'Matematika') {
    console.log('Odabrao si Matematiku');
  }
  else if (pitanje === 'Programiranje') {
    console.log('Odabrao si Programiranje');
  }

} catch (error) {
  console.error(error);
}