import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: { // works
          main: '#d00',
          contrastText: '#fff',
        },
        
    },
})
export default theme