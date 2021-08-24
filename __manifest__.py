# -*- coding: utf-8 -*-
{
    'name': "Advance Penguin Apparels Website Theme",

    'summary': """
        PA Website""",

    'description': """
        PenguinApparels Website Theme
    """,

    'author': "Shore Point System Private Limited",
    'website': "www.shorepointsys.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Theme',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','website'],

    # always loaded
    'data': [
        'views/assets.xml'
 ],
    # only loaded in demonstration mode
    'demo': [
    ],
}
