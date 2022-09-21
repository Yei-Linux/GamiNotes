import type { IDropDownCardNote } from 'src/app/types/dropdownDownCardNote.type';

export const dropDownCardNotes = (): IDropDownCardNote[] => [
  {
    id: 'edit',
    title: 'Editar',
    icon: 'pencil',
    url: null,
  },
  {
    id: 'delete',
    title: 'Eliminar',
    icon: 'trash',
    url: null,
  },
];
