import { ArrowBack, NavigateNext, Close, Favorite, FavoriteBorder, Search } from '@mui/icons-material';

const Icons = {
  ArrowBack,
  NavigateNext,
  Close,
  Favorite,
  FavoriteBorder,
  Search,
};

type Props = {
  color: string;
  height: number;
  type: keyof typeof Icons;
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line
  const Icon = Icons[type];
  return <Icon style={{ color, height, width }} />;
};
