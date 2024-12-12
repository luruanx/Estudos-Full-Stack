import { Person } from '@/components/person'
import { Card } from '@/components/Card'

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Outro texto</h3>

      {/* <Person 
        name='Elon Musk'
        avatar='https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg'
        roles={['CEO da Tesla', 'CEO SpaceX']}
      />
      <Person 
        name='Jeff Bezos'
        avatar='https://www.infomoney.com.br/wp-content/uploads/2019/06/jeff-bezos-1.jpg?fit=900%2C600&quality=50&strip=all'
        roles={['CEO da Amazon', 'CEO BlueOrigin']}
      />
      <Person 
        name='João'
        roles={['CEO']}
      /> */}


      <Card phrase="Alguma frase top" author='Coach de milhões' />

      
    </div>
  )
}

export default Page;