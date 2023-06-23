export interface Page {
  /** the ID of the page */
  page_id: number
  /** the unique locator for the page */
  url: string
  /** the title of the page */
  title: string
  /** the creation date for the page */
  created_at: Date
  /** the date the page was last updated */
  updated_at: Date
  /**
   * (DEPRECATED) whether this page is hidden from students (note: this is always
   * reflected as the inverse of the published value)
   */
  hide_from_students: boolean
  /**
   * roles allowed to edit the page; comma-separated list comprising a combination
   * of 'teachers', 'students', 'members', and/or 'public' if not supplied, course
   * defaults are used
   */
  editing_roles: ('teachers' | 'students' | 'members' | 'public')[]
  /**
   * the User who last edited the page (this may not be present if the page was
   * imported from another system)
   */
  last_edited_by: any
  /**
   * the page content, in HTML (present when requesting a single page; omitted
   * when listing pages)
   */
  body: string
  /** whether the page is published (true) or draft state (false). */
  published: boolean
  /** scheduled publication date for this page */
  publish_at: Date
  /** whether this page is the front page for the wiki */
  front_page: boolean
  /** Whether or not this is locked for the user. */
  locked_for_user: boolean
  /**
   * (Optional) Information for the user about the lock. Present when
   * locked_for_user is true.
   */
  lock_info: any
  /**
   * (Optional) An explanation of why this is locked for the user. Present when
   * locked_for_user is true.
   */
  lock_explanation: string
}
