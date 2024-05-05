import styled from "styled-components"

const ListElement = styled.li `
    list-style: none;

    & input {
        margin-right:25px
    }
    &:hover {
        background-color: #eee;
        cursor:pointer;
    }
`
   
const TaskText = styled.span `
     font-size: 18px;
     text-decoration:${(props) => props.isDone ?'line-throygh': 'none'};
`
  
export const TodoItem = ({ className,id, text, isDone, onToggleTodo }) => {
    const handleToggleTodo = () => {
        onToggleTodo?.(id)
    }

    return (
        <ListElement className ={className}>
            <input type="checkbox"
            checked={isDone}
            onChange={handleToggleTodo}
            />
            <TaskText
            isDone={isDone}

            >{text}
            </TaskText>
        </ListElement>
    )
}