import { Button } from "./Button";
import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: Function;
}
export const SideBar = ({ genres, selectedGenreId, handleClickButton }: SideBarProps) => {
  return (

    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      {genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </nav>
  );
}