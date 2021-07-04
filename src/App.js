import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List,
  Menu,
  Table,
  Label,
  Container
} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari document
              </Header>

              <Search placeholder='Search document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah document baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          {/* <Segment > */}
          <h3>Website terkait</h3>
          <List>
            <List.Item icon='linkify' content={<a href='#'>Google</a>} />
            <List.Item icon='linkify' content={<a href='#'>Facebook</a>} />
            <List.Item icon='linkify' content={<a href='#'>Semantic UI</a>} />
            <List.Item icon='linkify' content={<a href='#'>Niomic</a>} />
            <List.Item icon='linkify' content={<a href='#'>React</a>} />
          </List>
          {/* </Segment> */}
        </Grid.Column>
      </Grid>

      <Container style={{ marginTop: 10 }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell collapsing>Jenis Document</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

    </div>
  );
}

export default App;
