import { Grid, Typography } from '@mui/material'
import React from 'react'

export const PasswordLayout = ({ children, title = "" }) => {
    return (
        <Grid
            container
            spacing={0}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
            >
                <Grid
                    item
                    className='box-shadow'
                    xs={ 3 }
                    sx={{
                        width: { md: 450 },
                        backgroundColor: "secondary.main",
                        padding: 3,
                        borderRadius: 2
                    }}
                >
                    <Typography textAlign={"center"} variant='h5' sx={{ mb: 1, color: "white" }}>
                        { title }
                    </Typography>

                    { children }

                </Grid>

        </Grid>
    )
}