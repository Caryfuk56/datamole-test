import React from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { useApi } from "./hooks";
import {ListItem} from "./components/ListItem";

/**
 * The todo app.
 * @constructor
 */
export const App: React.FC = () => {
    const { isLoaded, isError, todos, addTodo, deleteTodo, editTodo, changeDone } = useApi({ fetchOnMount: true });
    console.log(todos.filter(item => item.done))

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header handleAddItem={addTodo}>To Do app</Header>
                    <List isLoading={isLoaded} isError={isError}>
                        {todos.map((item) => (
                            <ListItem
                                key={item.id}
                                itemId={item.id}
                                label={item.title}
                                handleEdit={editTodo}
                                handleRemoval={() => deleteTodo(item.id)}
                                onCheckedChange={(checked) => changeDone(item.id, item)}
                                checked={item.done}
                            />
                        ))}
                    </List>
                    <Footer todoItems={todos.length} doneItems={todos.filter(item => item.done).length} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
}
