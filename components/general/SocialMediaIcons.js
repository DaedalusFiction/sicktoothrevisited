import { IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import theme from "../../styles/themes/theme";
const SocialMediaIcons = ({ fontSize, color }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton>
                        <InstagramIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton>
                        <FacebookIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip title="twitter">
                <Link href="https://instagram.com">
                    <IconButton>
                        <TwitterIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Link>
            </Tooltip>
        </Stack>
    );
};

export default SocialMediaIcons;
