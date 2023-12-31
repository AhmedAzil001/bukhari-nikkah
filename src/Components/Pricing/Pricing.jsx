import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "🌎 Add your profile",
      "📩 Receive requests from others",
      "0️⃣ 0 Requests Per Month",
    ],
    buttonText: "Subscribe",
    buttonVariant: "contained",
  },
  {
    title: "Premium",
    subheader: "Popular",
    price: "15",
    description: [
      "👫 Send requests",
      "👍 Respond to requests",
      "🎊 Make matches",
      "⏪ Revoke requests",
      "🖐️ 5 Requests Per Month",
    ],
    buttonText: "Subscribe",
    buttonVariant: "contained",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    ochre: {
      main: "rgb(251 64 108/1)",
      light: "red",
      dark: "rgb(250, 37, 87)",
      contrastText: "white",
    },
  },
});

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{
          body: { paddingBottom: "20px" },
          ul: { margin: 0, padding: "20px", listStyle: "none" },
        }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography variant="h3" align="center" color="black" component="p">
        Our Subscription Plans
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent={"center"}
        >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} md={6}>
              <Card
                sx={{
                  boxShadow: "5px 15px 30px rgb(219, 219, 230)",
                  borderRadius: "10px",
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Premium" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                    color: "white",
                  }}
                  sx={{
                    backgroundColor: "rgb(251 64 108/1)",
                    color: "white",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "baseline",
                      mb: 2,
                      ml: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      £{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        marginBottom={"10px"}
                        key={line}
                      >
                        <DoneRoundedIcon
                          style={{
                            color: "rgb(251 64 108/1)",
                            marginRight: "15px",
                          }}
                        />
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {}}
                    variant={tier.buttonVariant}
                    color="ochre"
                    endIcon={<ArrowRightAltIcon />}
                    style={{display:"flex",alignItems:"center", borderRadius: "10px",  height:"40px",width:"100%"}}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
