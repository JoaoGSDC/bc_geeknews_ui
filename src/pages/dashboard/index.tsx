import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { FaDownload, FaPen, FaPlus, FaTable, FaTrash } from 'react-icons/fa';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';
import styles from './styles.module.scss';

interface INewsDTO {
  id: string;
  title: string;
  subtitle: string;
  datepublication: string | Date;
  image: string;
  matter: string;
  category: string;
  game: string;
  username: string;
}

export default function Dashboard({ news }: any) {
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [cover, setCover] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [game, setGame] = useState<string>('');
  const [user, setUser] = useState<string>('');

  const [isTable, setIsTable] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  async function onClickSave() {
    if (!window.confirm('Deseja mesmo salvar essa matéria?')) {
      return;
    }

    if (isUpdate) {
      await api
        .put('/api/news/update', {
          title,
          subtitle: subTitle,
          image: cover,
          matter: text,
          category: tag,
          game,
          username: user,
        })
        .then((res: any) => {
          window.alert('Atualizado com sucesso!');
          cancel();
        })
        .catch((error: any) => {
          console.log(error);
          window.alert('Erro ao salvar!');
        });

      return;
    }

    await api
      .post('/api/news/create', {
        title,
        subtitle: subTitle,
        image: cover,
        matter: text,
        category: tag,
        game,
        username: user,
      })
      .then((res: any) => {
        window.alert('Salvo com sucesso!');
        cancel();
      })
      .catch((error: any) => {
        console.log(error);
        window.alert('Erro ao salvar!');
      });
  }

  function setUpdateItems(matter: INewsDTO) {
    setTitle(matter.title);
    setSubTitle(matter.subtitle);
    setCover(matter.image);
    setText(matter.matter);
    setGame(matter.game);
    setTag(matter.category);

    setIsUpdate(true);

    setIsTable(false);
  }

  async function deleteMatter(matterId: string) {
    if (!window.confirm('Deseja realmente deletar essa matéria?')) {
      return;
    }

    await api
      .delete('/api/news/remove', { headers: { id: matterId } })
      .then((res: any) => {
        window.alert('Deletado com sucesso!');
      })
      .catch((error: any) => console.log(error));
  }

  function cancel() {
    setTitle('');
    setSubTitle('');
    setCover('');
    setText('');
    setGame('');
    setTag('');
    setIsUpdate(false);
    setIsTable(true);
  }

  return (
    <>
      <div className={styles.optionsContainer}>
        <button
          type="button"
          onClick={() => {
            setIsTable(true);
            setIsUpdate(false);
          }}
        >
          <FaTable size={25} />
        </button>

        <button
          type="button"
          onClick={() => {
            setIsTable(false);
            setIsUpdate(false);
          }}
        >
          <FaPlus size={25} />
        </button>
      </div>

      {isTable ? (
        <div className={styles.container}>
          <h2 style={{ textAlign: 'center' }}>Matérias publicadas</h2>

          <table>
            <thead>
              <tr>
                <th>Matéria</th>
                <th>Data</th>
                <th>Usuário</th>
                <th>Ações</th>
              </tr>
            </thead>

            {news.map((matter: INewsDTO) => {
              <tbody>
                <td>{matter.title}</td>
                <td>{matter.datepublication}</td>
                <td>{matter.username}</td>
                <td>
                  <FaPen size={15} onClick={() => setUpdateItems(matter)} />
                  <FaTrash size={15} onClick={() => deleteMatter(matter.id)} />
                </td>
              </tbody>;
            })}
          </table>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Adicionar nova matéria</h2>

          <div className={styles.selectFieldsContainer}>
            <div className={styles.containerFields}>
              <span>Título</span>
              <input placeholder="Título" onChange={(event: any) => setTitle(event.target.value)} />
            </div>

            <div className={styles.containerFields}>
              <span>Imagem</span>
              <div className={styles.fieldImage}>
                <input placeholder="Capa" onChange={(event: any) => setCover(event.target.value)} />
                <a target="_blank" href="https://bycross-software.imgbb.com/" rel="noopener noreferrer">
                  <FaDownload size={30} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.containerFields}>
            <span>Sub Título</span>
            <input placeholder="Sub Título" onChange={(event: any) => setSubTitle(event.target.value)} />
          </div>

          <span>Matéria</span>
          <textarea placeholder="Texto" onChange={(event: any) => setText(event.target.value)} />

          <div className={styles.selectFieldsContainer}>
            <div className={styles.containerFields}>
              <span>Categoria</span>
              <select placeholder="Tag" onChange={(event: any) => setTag(event.target.value)}>
                <option style={{ display: 'none' }} value="null"></option>
                <option value="Nerd">Nerd</option>
                <option value="eSports">eSports</option>
                <option value="Games">Games</option>
              </select>
            </div>

            <div className={styles.containerFields}>
              <span>Game</span>
              <select placeholder="Game" onChange={(event: any) => setGame(event.target.value)}>
                <option style={{ display: 'none' }} value="null"></option>
                <option value="LOL">League of Legends</option>
                <option value="FF">Free Fire</option>
                <option value="VAVA">Valorant</option>
                <option value="CSGO">Counter Strike: Global Offensive</option>
              </select>
            </div>

            <div className={styles.containerFields}>
              <span>Usuário</span>
              <select placeholder="Usuário" onChange={(event: any) => setUser(event.target.value)}>
                <option style={{ display: 'none' }} value="null"></option>
                <option value={`João "Fanton Lord" Gabriel`}>João &quot;Fanton Lord&quot; Gabriel</option>
                <option value="Redação">Redação</option>
              </select>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <button className={styles.primary} type="button" onClick={() => onClickSave()}>
              Salvar
            </button>

            <button className={styles.secondary} type="button" onClick={() => cancel()}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(`/news`, {
    params: {
      _limit: 10,
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  console.log(data);

  /* let news: any[] = [];
  data.forEach((values: any) => {
    news.push({
      id: values.id || '',
      title: values.title || '',
      datepublication: convertDateWriteMode(new Date(values.datepublication)) || '',
      username: values.username || '',
    });
  }); */

  return {
    props: {
      news: data || [],
    },
  };
};
