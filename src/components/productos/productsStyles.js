import { makeStyles } from '@material-ui/core/styles';

export const useStylesList = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
    //   justifyContent: 'flex-end',
    },
    papertable: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    fixedHeight: {
      height: 150,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
    button: {
        margin: theme.spacing(1),
    },
    derecha: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }
  }));