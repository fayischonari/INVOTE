// import { Icon } from '@iconify/react';
// import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------


export default function UsersCard({type,post}) {
  const {title,Icon,colorType,total,to} = type;
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(5, 0),
    color: theme.palette[colorType].darker,
    backgroundColor: theme.palette[colorType].lighter,
  }));
  const IconWrapperStyle = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    color: theme.palette[colorType].dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette[colorType].dark,
      0
    )} 0%, ${alpha(theme.palette[colorType].dark, 0.24)} 100%)`,
  }));
  return (
    <RootStyle>
      <Link to={`/${post}`} style={{ textDecoration: "none" }}>
      <IconWrapperStyle>
        {/* <Icon icon={appleFilled} width={24} height={24} /> */}
        <Icon/>
      </IconWrapperStyle>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">
        {total}
      </Typography>
      </Link>
    </RootStyle>
  );
}
