import * as S from './style';

const Cabecalho = () => (
  <div>
    <S.Form>
      <S.Input type="text" placeholder="nome completo" required />
      <S.Input type="email" placeholder="email" required />
      <S.Input type="number" placeholder="número de telefone" required />
      <S.Button>Adicionar</S.Button>
    </S.Form>
  </div>
);

export default Cabecalho;
