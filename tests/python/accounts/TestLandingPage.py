import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class LandingPageTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_login_link_should_go_to_login_form(self):
        driver = self.driver
        driver.get("http://localhost:3000")
        assert "Pseudo-interview" in driver.title
        login_link = driver.find_element_by_class_name("login-link")
        login_link.click()
        assert "/login" in driver.current_url

    def tearDown(self):
        self.driver.close()