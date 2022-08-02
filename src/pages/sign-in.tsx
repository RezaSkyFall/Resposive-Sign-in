import { Button, Checkbox, FormControlLabel, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import logoImage from './../assets/images/logo.svg';
import SideImage from './../assets/images/DRIP_20.svg';
import GoogleImage from './../assets/images/Google.svg';
import { CheckBox } from "@mui/icons-material";

export default function SignIn() {

    return (
        <Grid container spacing={1} sx={{ p: 2 }}>
            <Grid item xs={12} md={6}>
                <Stack spacing={1} sx={{ height: '100%' }}>
                    {/* Website logo */}
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <img src={logoImage} style={{ width: 32 }} />
                        <Typography fontWeight={600}>
                            PNFT Market
                        </Typography>
                    </Stack>

                    {/* Login form */}
                    <Stack spacing={1} flexGrow={1} justifyContent='center' alignSelf='center'>
                        <Typography variant='h4' fontWeight={700}>
                            NFT Access
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            Please fill your detail to access your account.
                        </Typography>

                        <Stack sx={{ pt: 4 }} spacing={2}>

                            <Stack spacing={0.5}>
                                <Typography variant='body1' fontWeight={600}>
                                    Email
                                </Typography>
                                <TextField sx={{ width: 360 }} />
                            </Stack>

                            <Stack spacing={0.5}>
                                <Typography variant='body1' fontWeight={600}>
                                    Password
                                </Typography>
                                <TextField sx={{ width: 360 }} type='password' />
                            </Stack>

                            <Stack direction='row' alignItems='center'>
                                <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />

                                <Typography color='primary' fontWeight={600} sx={{ flexGrow: 1 }} align='right'>
                                    Forgot Password?
                                </Typography >
                            </Stack>

                            <Button variant='contained' disableElevation sx={{ height: 44 }}>
                                Sign in
                            </Button>

                            <Button variant='outlined' disableElevation sx={{ height: 44, color: 'text.primary', borderColor: 'text.secondary' }} >
                                <img src={GoogleImage} style={{ paddingRight: 8 }} />
                                Sign in with Google
                            </Button>

                            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center' sx={{pt:2}}>
                                <Typography fontWeight={500}>
                                    Don’t have an account?
                                </Typography >
                                <Typography color='primary' fontWeight={600}>
                                    Sign up
                                </Typography >
                            </Stack>

                        </Stack>
                    </Stack>

                    <Stack spacing={3} direction='row'>
                        <Typography color='text.secondary'>
                            Design by: @CreatedbyNAMDesign
                        </Typography>
                        <Typography color='text.secondary'>
                            Front-end development by: Reza Barati
                        </Typography>
                    </Stack>
                </Stack>
            </Grid>

            <Grid item xs={false} md={6}>
                <Stack alignItems='center' sx={{ p: 2, backgroundColor: '#CBCCE8', borderRadius: 8 }}>
                    <img src={SideImage} style={{ width: '80%' }} />
                </Stack>
            </Grid>
        </Grid>
    )
}