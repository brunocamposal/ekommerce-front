import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { tileData } from '../utils/tileData';
import { useStyles } from '../utils/styles';

export const CategoryMobile = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootMobile}>
      <GridList className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridImage}>
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
