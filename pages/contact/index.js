import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">Get in Touch</Typography>
                        <br />
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsum quos delectus, accusamus tempore
                            reiciendis ducimus, ex temporibus quam dolor
                            voluptas at nostrum rerum autem ullam odio nisi,
                            maxime praesentium magni.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <ContactForm config={contactConfig} /> */}
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
