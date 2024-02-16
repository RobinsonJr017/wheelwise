import {useState} from 'react';
import {Container, Group, Burger} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import WheelWhiseLogo from "../WheelWhiseLogo.tsx";
import {useNavigate} from "react-router-dom";

const links = [
    {link: '/', label: 'Inicio'},
    {link: '/recommender', label: 'Recomendador'},
    {link: '/contact', label: 'Contacto'},
];

export function Header() {
    const navigate = useNavigate()
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            onClickCapture={() => navigate(link.link)}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <WheelWhiseLogo size={150}/>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
            </Container>
        </header>
    );
}