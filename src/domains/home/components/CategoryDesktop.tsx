import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { useHistory } from 'react-router-dom';

import { tileData } from '../utils/tileData';
import { useStyles } from '../utils/styles';

export const CategoryDesktop = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.rootDesktop}>
      <GridList className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            onClick={() => history.push(`/category/${tile.title.toLowerCase()}`)}
          >
            <img
              src={tile.img}
              alt={tile.title}
              className={classes.gridImage}
            />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
