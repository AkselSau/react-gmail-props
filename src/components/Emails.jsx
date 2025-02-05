import Email from "./Email"
import EmailView from "./EmailView";

function Emails({filteredEmails, toggleRead, toggleStar, changeMail, selectedMail}) {
    if (selectedMail) {
        return <EmailView
                changeMail={changeMail}
                selectedMail={selectedMail}
                />
    }
    return (
        <main className="emails">
            <ul>
            {filteredEmails.map((email) => (
                <Email
                key ={email.id}
                email ={email}
                toggleRead ={toggleRead}
                toggleStar ={toggleStar}
                selectedMail={selectedMail}
                changeMail={changeMail}
                />               
            ))}

            </ul>
        </main>
    );
}
export default Emails;