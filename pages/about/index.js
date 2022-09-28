import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { leadProfile, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={leadProfile.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">{leadProfile.name}</Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {leadProfile.content}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
