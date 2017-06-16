import Head from 'next/head'
import Header from '../components/header'
import Nav from '../components/nav'
export default () => (<div>
  	<Header>
	    <Head>
	      <title>Mis Datos Personales</title>
	      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	    </Head>
  	</Header>
  	<Nav/>
  	<p>Mis Datos Personales!</p>
  </div>
)