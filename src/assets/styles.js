import 'typeface-pt-serif'
import 'typeface-oswald'

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: 1220,
        [theme.breakpoints.up(1180 + theme.spacing.unit * 3 * 2)]: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        fontFamily: 'PT Serif',
        background: '#fff',
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Oswald',
            fontWeight: 400,
            color: '#1f1e1e'
        },
        '& .page-title': {
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .content-list': {
            cursor: 'pointer'
        },
        '& .content-list-title': {
            fontSize: '1.5rem',
            marginBottom: 10
        },
        '& .content-list-thumb': {
            maxWidth: '100%',
            height: 'auto'
        },
        '& .entry-meta-cats': {
            color: 'red',
            textTransform: 'uppercase',
            fontSize: '.75rem',
            fontWeight: '700',
            '&::after': {
                content: `', '`,
              },
            
        },
        '& .entry-meta-cats:last-child': {
            '&::after': {
                content: `''`,
              },
        },
    },
})

export default styles