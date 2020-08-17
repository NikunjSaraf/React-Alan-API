import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "5%",
    borderRadius: 10,
    color: "white",
    fontSize: "5px",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});
