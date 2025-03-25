"use client";

import { useState } from 'react';
import { AppShell, Burger, Group, UnstyledButton, rem, Center, Container, ActionIcon, Stack, Text, Title, Paper, Card, List, Button, Grid, MultiSelect } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import education from './education';
import { languages, frameworks, technologies } from './skills';
import work from './work';
import projects from './projects';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  const educationList = education.map(school => (
    <Card key={school.name} p="md" radius="md">
      <Title order={3}>{school.name}, {school.location}</Title>
      <Text><strong>{school.degree}</strong>{(school.gpa ? `, GPA ${school.gpa?.toFixed(2)}` : '')}</Text>
      <Text>{school.graduation}</Text>
    </Card>
  ));
  const languagesList = languages.map(skill => (
    <Paper
      key={skill.name}
      radius="xl"
      p="xs"
      withBorder
      style={{ borderColor: skill.color, borderWidth: rem(4), textAlign: "center" }}
      miw={rem(64)}
    >
      {skill.name}
    </Paper>
  ));
  const frameworksList = frameworks.map(skill => (
    <Paper
      key={skill.name}
      radius="xl"
      p="xs"
      withBorder
      style={{ borderColor: skill.color, borderWidth: rem(4), textAlign: "center" }}
      miw={rem(64)}
    >
      {skill.name}
    </Paper>
  ));
  const technologiesList = technologies.map(skill => (
    <Paper
      key={skill.name}
      radius="xl"
      p="xs"
      withBorder
      style={{ borderColor: skill.color, borderWidth: rem(4), textAlign: "center" }}
      miw={rem(64)}
    >
      {skill.name}
    </Paper>
  ));
  const workList = work.map(job => (
    <Card key={job.name} p="md" radius="md">
      <Title order={3}>{job.name}</Title>
      <Text>{job.company}, {job.location}</Text>
      <Text>{job.start} - {job.end}</Text>
      <List mt="md">
        {job.description.map((detail, d) => (
          <List.Item key={d}>{detail}</List.Item>
        ))}
      </List>
    </Card>
  ));
  const projectsList = projects.map(project => (
    <Grid.Col key={project.name} span={{ base: 12, md: 4 }}>
      <Card p="md" radius="md">
        <Title order={3}>{project.name}</Title>
        <Text>{project.description}</Text>
        <Group py="md">{project.skills.map(skill => (
            <Paper
              key={skill?.name}
              radius="xl"
              p="xs"
              withBorder
              style={{ borderColor: skill?.color, borderWidth: rem(4), textAlign: "center" }}
              miw={rem(64)}
            >
              {skill?.name}
            </Paper>
        ))}</Group>
        <Group>
          <Button component="a" href={project.liveLink} target="_blank" variant="light">VIEW</Button>
          <Button component="a" href={project.repoLink} target="_blank" color="gray" variant="light">CODE</Button>
        </Group>
      </Card>
    </Grid.Col>
  ));
  const [selectedSkills, setSkills] = useState<string[]>([]);
  
  return (<>
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
      bg="dark.8"
    >
      <AppShell.Header bg="dark.5">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="center" style={{ flex: 1 }}>
            <Group gap={0} visibleFrom="sm">
              <UnstyledButton className={classes.control} component="a" href="#education">Education</UnstyledButton>
              <UnstyledButton className={classes.control} component="a" href="#skills">Skills</UnstyledButton>
              <UnstyledButton className={classes.control} component="a" href="#work">Work Experience</UnstyledButton>
              <UnstyledButton className={classes.control} component="a" href="#project">Project Experience</UnstyledButton>
              <Button component="a" href="#contact">CONTACT</Button>
            </Group>
          </Group>
          <Button component="a" href="#contact" hiddenFrom="sm" size="sm" tt="capitalize">CONTACT</Button>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} bg="dark.7">
        <UnstyledButton className={classes.control} component="a" href="#education" onClick={toggle}>Education</UnstyledButton>
        <UnstyledButton className={classes.control} component="a" href="#skills" onClick={toggle}>Skills</UnstyledButton>
        <UnstyledButton className={classes.control} component="a" href="#work" onClick={toggle}>Work Experience</UnstyledButton>
        <UnstyledButton className={classes.control} component="a" href="#project" onClick={toggle}>Project Experience</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main pb={rem("76px")}>
        <Container>
          <Title order={1}>Welcome!</Title>
          <Text>I&apos;m Wesley Matthews, a computer engineer with a few years of experience in web development, game development, and problem solving. I am looking to further my web development experience, game development experience, or branch out into other software fields.</Text>
          <Title id="education" order={2} mt="md" tt="uppercase">Education</Title>
          <Stack
            align="stretch"
            justify="center"
            gap="lg"
            py="md"
          >
            {educationList}
          </Stack>
          <Title id="skills" order={2} mt="md" tt="uppercase">Skills</Title>
          <Title order={3} mt="md">Programming Languages</Title>
          <Group py="md">{languagesList}</Group>
          <Title order={3} mt="md">Frameworks</Title>
          <Group py="md">{frameworksList}</Group>
          <Title order={3} mt="md">Technologies</Title>
          <Group py="md">{technologiesList}</Group>
          <Title id="work" order={2} mt="md" tt="uppercase">Work Experience</Title>
          <Stack
            align="stretch"
            justify="center"
            gap="lg"
            py="md"
          >
            {workList}
          </Stack>
          <Title id="project" order={2} mt="md" tt="uppercase">Project Experience</Title>
          <MultiSelect
            label="Search by skills"
            clearable
            data={[...languages.map(skill => skill.name), ...frameworks.map(skill => skill.name), ...technologies.map(skill => skill.name)]}
            value={selectedSkills}
            onChange={setSkills}
          />
          <Grid py="md" >
            {projectsList.filter(project => {
              return projects.find(p => p.name === project.key)?.skills.find(skill => selectedSkills.includes(skill?.name ?? '')) || selectedSkills.length === 0;
            })}
          </Grid>
          <Title id="contact" order={2} mt="md" tt="uppercase">Contact</Title>
          <Text>Wanting to contact me? I look forward to hearing back from you at: <a href="mailto:wdmatthews3@gmail.com">wdmatthews3@gmail.com</a></Text>
          <Text>If you are interested in downloading my paper resume, check it out here:</Text>
          <Button component="a" href="./WesleyMatthews_Resume.pdf" target="_blank" mt="md">DOWNLOAD RESUME</Button>
        </Container>
      </AppShell.Main>
      
      <AppShell.Footer p="sm" bg="dark.6">
        <Center>
          <ActionIcon variant="default" aria-label="Email" component="a" href="mailto:wdmatthews3@gmail.com" target="_blank" size="lg" bg="red" bd="none">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </ActionIcon>
          <ActionIcon variant="default" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/wdmatthews" target="_blank" size="lg" mx="md" bg="red" bd="none">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </ActionIcon>
          <ActionIcon variant="default" aria-label="GitHub" component="a" href="https://github.com/wdmatthews" target="_blank" size="lg" bg="red" bd="none">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </ActionIcon>
        </Center>
      </AppShell.Footer>
    </AppShell>
  </>);
}
