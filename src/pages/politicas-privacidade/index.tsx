import React from 'react';
import styles from './styles.module.scss';

export default function PrivacyPolicies() {
  return (
    <>
      <div className={styles.container}>
        <h1>Política de Privacidade</h1>

        <p>
          A sua privacidade é importante para nós. É política do Geek News respeitar a sua privacidade em relação a
          qualquer informação sua que possamos coletar no site <a href="https://portalgeeknews.com.br/">Geek News</a>, e
          outros sites que possuímos e operamos.
        </p>

        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
          Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos
          coletando e como será usado.
        </p>

        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando
          armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem
          como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>

        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido
          por lei.
        </p>

        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos
          controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{' '}
          <a href="https://politicaprivacidade.com" target="blank">
            políticas de privacidade
          </a>
          .
        </p>

        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos
          fornecer alguns dos serviços desejados.
        </p>

        <p>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e
          informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações
          pessoais, entre em contacto conosco.
        </p>
      </div>
    </>
  );
}
