import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { FaDownload, FaPen, FaPlus, FaTable, FaTrash } from 'react-icons/fa';
import { DataGrid } from '@material-ui/data-grid';
import RichTextEditor from '../../components/RichTextEditor';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';
import styles from './styles.module.scss';
import { IMatterDTO } from '../../interfaces/IMatterDTO';

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
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [cover, setCover] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [game, setGame] = useState<string>('');
  const [user, setUser] = useState<string>('');

  const [isTable, setIsTable] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);

  const [focus, setFocus] = useState<number>(-1);
  const [matter, setMatter] = useState<IMatterDTO>({} as IMatterDTO);

  useEffect(() => localStorage.setItem('matter', ''), []);

  async function onClickSave() {
    if (!window.confirm('Deseja mesmo salvar essa matéria?')) {
      return;
    }

    const matter: string = String(localStorage.getItem('matter'));

    if (isUpdate) {
      await api
        .put('/api/news/update', {
          id,
          title,
          subtitle: subTitle,
          image: cover,
          matter,
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
        matter,
        category: tag,
        game,
        username: user,
        topmatter: 3,
        datepublication: new Date(),
        views: 0,
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

  async function setUpdateItems(matterRow: any) {
    await api
      .get('/api/news/findOne', {
        params: {
          _id: matterRow.row.id,
        },
      })
      .then((response: any) => {
        const matter = response.data;

        setId(matter._id);

        setTitle(matter.title);
        setSubTitle(matter.subtitle);
        setCover(matter.image);
        setText(matter.matter);

        localStorage.setItem('matter', matter.matter);

        setGame(matter.game);
        setTag(matter.category);
        setUser(matter.username);

        setIsUpdate(true);

        setIsTable(false);
      })
      .catch((error: any) => console.log(error));
  }

  async function deleteMatter() {
    const { _id, title } = matter;

    if (!window.confirm(`Deseja deletar a matéria \n${title}\n?`)) {
      return;
    }

    if (!window.confirm(`Realmente é a matéria \n${title}\n que você quer deletar?`)) {
      return;
    }

    await api
      .delete('/api/news/remove', { headers: { _id } })
      .then((res: any) => {
        window.alert('Deletado com sucesso!');
      })
      .catch((error: any) => console.log(error));
  }

  function cancel(isUpdate = false) {
    setId('');
    setTitle('');
    setSubTitle('');
    setCover('');
    setText('');
    setGame('');
    setTag('');
    setIsUpdate(isUpdate);
    setIsTable(!isUpdate);
    localStorage.removeItem('matter');
  }

  function DashboardTable() {
    const columns = [
      { field: 'id', headerName: 'ID', width: 150, hide: true },
      { field: 'title', headerName: 'Matéria', width: 450 },
      { field: 'datepublication', headerName: 'Data', width: 200 },
      { field: 'username', headerName: 'Usuário', width: 200 },
    ];

    return (
      <>
        <div className={styles.container}>
          <div className={styles.datagridContainer}>
            <DataGrid
              rows={news}
              columns={columns}
              pageSize={10}
              checkboxSelection
              onRowDoubleClick={(matterRow: any) => setUpdateItems(matterRow)}
              onCellClick={(matterRow: any) => setMatter(matterRow.row)}
            />
          </div>
        </div>
      </>
    );
  }

  function DashboardNewMatter() {
    return (
      <>
        <div className={styles.container}>
          <h2>Adicionar nova matéria</h2>

          <div className={styles.newMatterContainer}>
            <div className={styles.editorContainer}>
              <div className={styles.textEditorContainer}>
                <RichTextEditor />
              </div>
            </div>

            <div className={styles.fieldsContainer}>
              <div className={styles.containerFields}>
                <span>Título</span>
                <input
                  placeholder="Título"
                  value={title}
                  onChange={(event: any) => {
                    setTitle(event.target.value);
                    setFocus(0);
                  }}
                  onBlur={() => setFocus(-1)}
                  autoFocus={focus === 0}
                />
              </div>

              <div className={styles.containerFields}>
                <span>Imagem</span>
                <div className={styles.fieldImage}>
                  <input
                    placeholder="Capa"
                    value={cover}
                    onChange={(event: any) => {
                      setCover(event.target.value);
                      setFocus(1);
                    }}
                    onBlur={() => setFocus(-1)}
                    autoFocus={focus === 1}
                  />
                  <a target="_blank" href="https://bycross-software.imgbb.com/" rel="noopener noreferrer">
                    <FaDownload size={30} />
                  </a>
                </div>
              </div>

              <div className={styles.containerFields}>
                <span>Sub Título</span>
                <input
                  placeholder="Sub Título"
                  value={subTitle}
                  onChange={(event: any) => {
                    setSubTitle(event.target.value);
                    setFocus(2);
                  }}
                  onBlur={() => setFocus(-1)}
                  autoFocus={focus === 2}
                />
              </div>

              <div className={styles.containerFields}>
                <span>Categoria</span>
                <select placeholder="Tag" value={tag} onChange={(event: any) => setTag(event.target.value)}>
                  <option style={{ display: 'none' }} value="null"></option>
                  <option value="Nerd">Nerd</option>
                  <option value="eSports">eSports</option>
                  <option value="Games">Games</option>
                </select>
              </div>

              <div className={styles.containerFields}>
                <span>Game</span>
                <select placeholder="Game" value={game} onChange={(event: any) => setGame(event.target.value)}>
                  <option style={{ display: 'none' }} value="null"></option>
                  <option value="LOL">League of Legends</option>
                  <option value="FF">Free Fire</option>
                  <option value="VAVA">Valorant</option>
                  <option value="CSGO">Counter Strike: Global Offensive</option>
                </select>
              </div>

              <div className={styles.containerFields}>
                <span>Usuário</span>
                <select placeholder="Usuário" value={user} onChange={(event: any) => setUser(event.target.value)}>
                  <option style={{ display: 'none' }} value="null"></option>
                  <option value={`João "Fanton Lord" Gabriel`}>João &quot;Fanton Lord&quot; Gabriel</option>
                  <option value="Redação">Redação</option>
                </select>
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
          </div>
        </div>
      </>
    );
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
            cancel(true);
          }}
        >
          <FaPlus size={25} />
        </button>

        <button type="button" onClick={() => deleteMatter()}>
          <FaTrash size={25} />
        </button>
      </div>

      {isTable ? <DashboardTable /> : <DashboardNewMatter />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/api/news/findAll');

  let news: any[] = [];
  data.forEach((values: any) => {
    news.push({
      id: values._id || '',
      title: values.title || '',
      datepublication: convertDateWriteMode(new Date(values.datepublication)) || '',
      username: values.username || '',
    });
  });

  return {
    props: {
      news,
    },
  };
};
