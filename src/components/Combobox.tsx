import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  Flex,
  InputGroup,
  InputRightAddon,
  FormLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCombobox } from "downshift";
import React from "react";

interface IBook {
  author: string;
  title: string;
}
const books = [
  { author: "Harper Lee", title: "To Kill a Mockingbird" },
  { author: "Lev Tolstoy", title: "War and Peace" },
  { author: "Fyodor Dostoyevsy", title: "The Idiot" },
  { author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
  { author: "George Orwell", title: "1984" },
  { author: "Jane Austen", title: "Pride and Prejudice" },
  { author: "Marcus Aurelius", title: "Meditations" },
  { author: "Fyodor Dostoevsky", title: "The Brothers Karamazov" },
  { author: "Lev Tolstoy", title: "Anna Karenina" },
  { author: "Fyodor Dostoevsky", title: "Crime and Punishment" },
];

function ComboBox() {
  const [items, setItems] = React.useState<IBook[]>(books);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(
        books.filter((book: IBook) => {
          return (
            !inputValue ||
            book.title.toLowerCase().includes(inputValue) ||
            book.author.toLowerCase().includes(inputValue)
          );
        })
      );
    },
    items,
    itemToString(item: IBook | null) {
      return item ? item.title : "";
    },
  });
  return (
    <Box>
      <FormLabel {...getLabelProps()}>Choose your favorite book:</FormLabel>
      <Box position="relative">
        <Flex {...getComboboxProps()}>
          <InputGroup>
            <Input {...getInputProps()} data-test="downshift-input" />
            <InputRightAddon padding={0}>
              <Button
                aria-label="toggle menu"
                type="button"
                {...getToggleButtonProps()}
              >
                {isOpen ? <>&#8593;</> : <>&#8595;</>}
              </Button>
            </InputRightAddon>
          </InputGroup>
        </Flex>
        <List
          {...getMenuProps()}
          position="absolute"
          w="100%"
          data-test="downshift-menu"
        >
          {isOpen &&
            items.map((item, index) => {
              const bg = highlightedIndex === index ? "gray.200" : "gray.100";
              return (
                <ListItem
                  bg={bg}
                  p="1rem"
                  key={`${item.title}${index}`}
                  {...getItemProps({ item, index })}
                >
                  <VStack align="start" justify="space-between">
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text as="span">{item.author}</Text>
                  </VStack>
                </ListItem>
              );
            })}
        </List>
      </Box>
    </Box>
  );
}

export default ComboBox;
