import React from 'react';
import {
	Typography,
	Paper,
	Avatar,
	CircularProgress,
	Button
} from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
			theme.spacing(3)
		}px`
	},
	avatar: {
		margin: theme.spacing(),
		backgroundColor: theme.palette.secondary.main
	},
	submit: {
		marginTop: theme.spacing(3)
	}
});

function Dashboard(props) {
	const { classes } = props;

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Hello takie
				</Typography>
				<Typography component='h1' variant='h5'>
					Your quote: nothing 
				</Typography>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='secondary'
					className={classes.submit}
				>
					Logout
				</Button>
			</Paper>
		</main>
	);
}

export default withRouter(withStyles(styles)(Dashboard));
