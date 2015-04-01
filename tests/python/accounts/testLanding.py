import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class PSDLandingTestCase(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(executable_path="/Applications/chromedriver")

    def test_LoginLinkShouldGoToLoginForm(self):
        driver = self.driver
        driver.get("http://localhost:3000")
        assert "Pseudo-interview" in driver.title
        loginLink = driver.find_element_by_class_name("login-link")
        loginLink.click()
        assert "/login" in driver.current_url

    def tearDown(self):
        self.driver.close()
