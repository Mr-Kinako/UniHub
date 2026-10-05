import styles from "./Footer.module.scss";

export const Footer = ({...props}) => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <span className={styles.copyright}>&copy; 2026 UniHub.</span>
                <span className={styles.authors}><strong>Authors:</strong> {props.websiteAuthor}</span>
            </div>
        </footer>
    );
};
