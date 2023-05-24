import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import NavFeatureTab from "../header/NavFeatureTab"
import NavCategoryTab from "../header/NavCategoryTab"
import BodyClassName from "react-body-classname"
import { Logo, BlogIcon } from "../../utils/imgLoader"
import "../style.scss"
import { Image } from "../image"

const BlogHeader = () => {
  const data = useStaticQuery(graphql`
    query BlogHeader {
      allPrismicFeatures(sort: { order: ASC, fields: data___priority }) {
        nodes {
          data {
            name
            slug
            description
            featured_in_navbar
            type
            img {
              url
            }
          }
        }
      }
      allPrismicBlogCategory {
        nodes {
          data {
            slug
            name
            icon {
              url
            }
          }
          prismicId
        }
      }
    }
  `)

  const featureData = data.allPrismicFeatures.nodes.filter(
    item => item.data.featured_in_navbar === true
  )
  const navFeatureDiscoverData = featureData.filter(
    item => item.data.type === "Discover"
  )
  const navFeatureExcuteData = featureData.filter(
    item => item.data.type === "Execute"
  )
  const navFeatureAnalyzeData = featureData.filter(
    item => item.data.type === "Analyze"
  )
  const navCategoryData = data.allPrismicBlogCategory.nodes

  const [hambugerActive, setHambugerActiveState] = useState(false)
  const [navMenuShow, setNavMenuShow] = useState(["", ""])
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }
  const navMenuClick = idx => {
    let navMenuValue = navMenuShow
    if (navMenuShow[idx] === "show") {
      navMenuValue[idx] = ""
    } else {
      navMenuValue[idx] = "show"
    }
    setNavMenuShow(navMenuValue)
  }
  let humbugerClsName = "hamburger my-auto m-4 "
  let navMenuClsName = "nav-items desktop"
  let bodyClsName = ""
  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += " active"
    bodyClsName += "bk-color-white"
  }
  return (
    <BodyClassName className={bodyClsName}>
      <header className="header blog-header">
        <div className="layout-container">
          <nav className="header-nav">
            <div className="left-side d-flex">
              <Link to="/">
                <Image alt="altrady logo" src={Logo} width="129" height="32" />
              </Link>
              <Link to="/blog">
                <div className="navbar-blog d-flex">
                  <Image
                    alt="blog icon"
                    src={BlogIcon}
                    className="blog-icon"
                    width={18}
                    height={24}
                  />
                  <p className="navlink color-secondary m-auto">Blog</p>
                </div>
              </Link>
            </div>
            <div className="d-flex">
              <ul className="nav-items tablet-show">
                <li className="nav-item">
                  <Link to="#what" className="nav-link">
                    What is Altrady
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#categories" className="nav-link">
                    Categories
                  </Link>
                </li>
                <li className="">
                  <a
                    className="btn btn-primary "
                    href="https://app.altrady.com/dashboard#/signup"
                  >
                    Try for Free
                  </a>
                </li>
              </ul>

              <div
                className={humbugerClsName}
                onClick={hamburgerHandler}
                onKeyDown={hamburgerHandler}
                role="button"
                tabIndex="0"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={navMenuClsName}>
                <li className="nav-item">
                  <Link to="#what" className="nav-link">
                    What is Altrady
                  </Link>
                </li>
                <li
                  className={"nav-item dropdown " + navMenuShow[0]}
                  onClick={() => navMenuClick(0)}
                  onKeyDown={() => navMenuClick(0)}
                  role="presentation"
                >
                  <Link to="#features" className="nav-link dropdown-item">
                    Features
                    <span />
                  </Link>
                  <NavFeatureTab
                    navFeatureDiscoverData={navFeatureDiscoverData}
                    navFeatureExcuteData={navFeatureExcuteData}
                    navFeatureAnalyzeData={navFeatureAnalyzeData}
                  />
                </li>
                <li
                  className={"nav-item dropdown " + navMenuShow[1]}
                  onClick={() => navMenuClick(1)}
                  onKeyDown={() => navMenuClick(1)}
                  role="presentation"
                >
                  <Link to="#categories" className="nav-link dropdown-item">
                    Categories
                    <span />
                  </Link>
                  <NavCategoryTab navCategoryData={navCategoryData} />
                </li>
                <li className="action-btns">
                  <a
                    className="btn btn-primary "
                    href="https://app.altrady.com/dashboard#/signup"
                  >
                    Try for Free
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </BodyClassName>
  )
}

export default BlogHeader
