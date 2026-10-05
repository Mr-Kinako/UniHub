import styles from "./Home.module.scss";

export const Home = ({...props}) => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroContainer}>
                <div className={styles.heroHeader}>
                    <div className={styles.metaInfo}>
                        <img className={styles.icon}
                            src={props.projectIcon}
                        />
                        <h1 className={styles.title}>{props.projectName}</h1>
                    </div>

                    <span className={styles.divider}></span>

                    <p className={styles.description}>{props.projectDesc}</p>
                </div>
            </div>
        </div>
    );
};
