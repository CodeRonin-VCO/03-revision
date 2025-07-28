import styles from "./collections.module.css";

const Collection = ({ list = [] }) => {
    console.log(list);
    console.log(list[0].id);
    

    return (
        <ul className={styles.container_list}>
            {list.map(item => (
                <li key={item.id}>
                    {item.firstName} {item.lastName}
                </li>
            ))}
        </ul>
    )
}

export default Collection;