import type { IDropDownCardNote } from 'src/app/types/dropdownDownCardNote.type';

export const dropDownCardNotes = (): IDropDownCardNote[] => [
  {
    id: 'edit',
    title: 'Editar',
    icon: 'pencil',
    url: null,
  },
  {
    id: 'add-cards',
    title: 'Añadir tarjetas',
    icon: 'plus-lg',
    url: null,
  },
  {
    id: 'share',
    title: 'Compartir',
    icon: 'share',
    url: null,
  },
  {
    id: 'archive',
    title: 'Archivar',
    icon: 'archive',
    url: null,
  },
  {
    id: 'export',
    title: 'Exportar',
    icon: 'arrow-left-right',
    url: null,
  },
  {
    id: 'merge',
    title: 'Combinar',
    icon: 'intersect',
    url: null,
  },
  {
    id: 'move',
    title: 'Mover',
    icon: 'folder-x',
    url: null,
  },
  {
    id: 'delete',
    title: 'Eliminar',
    icon: 'trash',
    url: null,
  },
];
