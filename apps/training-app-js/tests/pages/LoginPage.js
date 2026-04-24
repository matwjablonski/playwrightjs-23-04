class LoginPage {
    constructor(page) {
        this.page = page;
        
        this.loginBox = page.getByRole('textbox', { name: 'Wprowadź hasło...' });
    }

    async login(password = 'admin123') {
        await this.loginBox.click();
        await this.loginBox.fill(password);
        await this.loginBox.press('Enter');
    }
}

export default LoginPage;